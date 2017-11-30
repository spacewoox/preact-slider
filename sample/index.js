import { h, render } from 'preact'
import Slider from '../src/Slider'
import ResponsiveSlider from '../src/ResponsiveSlider'

const datas = [
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

  const wrapDataItemInDiv = datas =>
    datas.map(x => <div style={style.item}>{x.name}</div>)

  const breakpoints = [
    { bp: 1000, itemPerPage: 5 },
    { bp: 600, itemPerPage: 3 },
    { bp: 400, itemPerPage: 1 },
  ]

  return (
    <div>

      <h4>Slider</h4>
      <Slider datas={wrapDataItemInDiv(datas)} itemPerPage={3}>
        {(list, next, prev) => (
          <div>
            <div>
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
            {list}
          </div>
        )}
      </Slider>

      <hr />

      <h4>Responsive Slider</h4>
      <ResponsiveSlider
        datas={wrapDataItemInDiv(datas)}
        breakpoints={breakpoints}>

        {(list, next, prev) => (
          <div>
            <div>
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
            {list}
          </div>
        )}
      </ResponsiveSlider>

    </div>
  )
}

render(
  <Sample />,
  document.querySelector('#app')
)
