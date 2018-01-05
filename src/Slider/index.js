import { h, render, Component } from 'preact'
import enquire from 'enquire.js'
import json2mq from 'json2mq'
import WithPaginate from '../WithPaginate'
import WithSliding from '../WithSliding'
import { cycleThrough } from '../lib/Pagination'
import { toArrayOfXElement } from '../lib/Utils'
import { generateSortedMediaQueriesFromList } from '../lib/Json2MqParsing'
import './style.css'

const GenerateSliderList = ({itemPerPage, data, display, children }) => {

  const generateItem = content => {
    let style;
    if (display === 'row') {
      style = {
        width: (100 / itemPerPage) + '%',
        display: 'inline-block'
      }
    }
    else if (display === 'column') {
      style = {
        width: '100%',
        display: 'block'
      }
    }
    return <div className='slider-item' style={style}>{content}</div>
  }

  const list =
    toArrayOfXElement(
      data.map(x => generateItem(x)),
      itemPerPage
    )
    .map(x => <div className='slider-page'>{x}</div>)

  return children[0](list)
}

const Slider = ({data, display='row', itemPerPage=data.length, children}) => {
  return (
    <GenerateSliderList itemPerPage={itemPerPage} data={data} display={display}>
    {list => (

      <WithPaginate max={list.length-1} min={0}>
      {(offset, next, prev) => (

        <WithSliding list={list} offset={offset}>
        {() => (
          <div className='slider-container'>
            {children[0](list, next, prev, offset)}
          </div>
        )}
        </WithSliding>
      )}
      </WithPaginate>
    )}
    </GenerateSliderList>
  )
}

export default Slider
