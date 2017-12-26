import { h, render } from 'preact'
import NewSlider from '../src/NewSlider'

const data = [
  { name: 'test1' },
  { name: 'test2' },
  { name: 'test3' },
  { name: 'test4' },
  { name: 'test5' },
  { name: 'test6' },
  { name: 'test7' },
]

const style = {
  item: {
    borderRadius: '4px',
    padding: '10px',
    height: '300px',
    backgroundColor: '#b7d6b7',
    margin: '10px',
  }
}

const Sample = () => {

  const getList = mapper => {

    const list = mapper(x => {
      return <div style={style.item}>{x.name}</div>
    })
    return list
  }

  return (
    <div>
      <h4>Slider</h4>
      <NewSlider
        data={data}
        itemPerPage={3}>

      {(mapper, next, prev, offset) => (

        <div>
          <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          { getList(mapper) }
        </div>
      )}

      </NewSlider>
    </div>
  )
}

render(
  <Sample />,
  document.querySelector('#app')
)
