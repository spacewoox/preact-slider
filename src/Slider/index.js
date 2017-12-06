import { h, render, Component } from 'preact'
import enquire from 'enquire.js'
import json2mq from 'json2mq'
import WithPaginate from '../WithPaginate'
import WithSliding from '../WithSliding'
import { cycleThrough } from '../lib/Pagination'
import { toArrayOfXElement } from '../lib/Utils'
import { generateSortedMediaQueriesFromList } from '../lib/Json2MqParsing'
import './style.css'

/*
const Slider2 = ({datas, itemPerPage=datas.length, children}) => {
  const groupedDatas = toArrayOfXElement(datas, itemPerPage)
  const mapper = Fn => {
    const list =
      groupedDatas.map(page =>
        page.map(x =>
          <div className='slider-item' style={{width: (100 / itemPerPage) + '%'}}>
            {Fn(x)}
          </div>
        )
      ).map(x => <div className='slider-page'>{x}</div>)

    return list
  }

  return (
    <WithPaginate max={groupedDatas.length-1} min={0}>
    {(offset, next, prev) => (
      <div className='slider-container'>
        {children[0](mapper, next, prev, offset)}
      </div>
    )}
    </WithPaginate>
  )
}
*/

class Slider extends Component {
  constructor(props) {
    super(props)
    const { datas, itemPerPage } = props
    this.state = { list: null }
    this.mapper = this.mapper.bind(this)
    this.groupedDatas = toArrayOfXElement(datas, itemPerPage)
  }

  mapper(Fn) {
    const {datas, itemPerPage=datas.length } = this.props
    const list =
      this.groupedDatas.map(page =>
        page.map(x =>
          <div className='slider-item' style={{width: (100 / itemPerPage) + '%'}}>
          {Fn(x)}
          </div>
        )
      ).map(x => <div className='slider-page'>{x}</div>)

    console.log('set state')
    /*
    this.setState({
      list: list
    })
    */
    return list
  }

  render() {
    const {datas, itemPerPage=datas.length, children} = this.props
    console.log('re-render slider')

    return (
      <WithPaginate max={this.groupedDatas.length-1} min={0}>
      {(offset, next, prev) => (

        <WithSliding list={this.state.list} offset={offset}>
        {() => (

          <div className='slider-container'>
            {children[0](this.mapper, next, prev, offset)}
          </div>
        )}
        </WithSliding>
      )}
      </WithPaginate>
    )

  }
}



export default Slider
