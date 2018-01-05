import { h, Component } from 'preact'
import Slider from './Slider'
import MediaQuery from './lib/MediaQuery'

const DynamicItemPerPage = ({ breakpoints, children }) => {
  const settings =
    breakpoints
    .map(({ bp, ...rest }) => ({ bp: bp, data: rest }))

  return (
    <MediaQuery settings={settings}>
    {data => {
      return (
        <div>
          {children[0](data.itemPerPage)}
        </div>
      )
    }}
    </MediaQuery>
  )
}

const ResponsiveSlider = ({ data, breakpoints, children }) => {
  if (!breakpoints) {
    console.warn('Preact slider : breakpoints object is missing')
    return null
  }
  return (
    <DynamicItemPerPage breakpoints={breakpoints}>
      {itemPerPage => (

        <div>
          <Slider data={data} itemPerPage={itemPerPage}>
            {(list, next, prev, offset) => (
              children[0](list, next, prev, offset)
            )}
          </Slider>
        </div>
      )}
    </DynamicItemPerPage>
  )
}

export default ResponsiveSlider
