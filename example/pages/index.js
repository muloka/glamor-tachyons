import React from 'react'
import { insertRule, css, style, rehydrate } from 'glamor'
import { tachyons, reset, wrap } from 'glamor-tachyons'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

reset({ insertRule })

const t = (classNames) => css(tachyons(classNames))

const styles = {
  header: style({
    background: 'url(http://mrmrs.github.io/photos/display.jpg) no-repeat center right',
    backgroundSize: 'cover'
  })
}

const classNames = wrap({
  article: `helvetica pb5`,
  header: {
    wrapper: `dtc v-mid cover ph3 ph4-m ph5-l`,
    h1: `f2 f-subheadline-l measure lh-title fw9`,
    h2: `f6 fw6 black bb b--pink dib`
  }
}, css)

export default () => (
<article className={classNames.article}>
  <header className={t(`vh-100 bg-light-pink dt w-100`)}>
    <div 
      {...styles.header}
      className={classNames.header.wrapper}>
      <h1 className={classNames.header.h1}>A Night Taking Photos at San Francisco’s Spooky Ruins of the Sutro Baths</h1>
      <h2 className={classNames.header.h2}>A story by Nancy Drew</h2>
    </div>
  </header>
  <div className={t(`serif ph3 ph4-m ph5-l`)}>
    <p className={t(`lh-copy f5 f3-m f1-l measure center pv4`)}>
    On <time>March 14, 1896</time>, the Sutro Baths were opened to the public as the world's largest indoor swimming pool establishment. </p>
    <div className={t(`f5 f3-m lh-copy`)}>
      <div className={t(`cf dt-l w-100 bt b--black-10 pv4`)}>
        <div className={t(`dtc-l v-mid mw6 pr3-l`)}>
          <img className={t(`w-100`)} src="http://mrmrs.github.io/photos/009.jpg" alt=""/>
        </div>
        <div className={t(`dtc-l v-mid f6 f5-m f4-l measure-l`)}>
          <p className={t(`measure pv4-l center`)}>
            <span className={t(`fw9 fw4-ns`)}>
              Before it burned to the ground, the structure</span> filled a small beach
            inlet below the Cliff House, also owned by Adolph Sutro at the time.
            Shortly after closing, a fire in 1966 destroyed the building
            while it was in the process of being demolished. All that remains
            of the site are concrete walls, blocked off stairs and
            passageways, and a tunnel with a deep crevice in the middle. The
            cause of the fire was arson. Shortly afterwards, the developer
            left San Francisco and claimed insurance money.
          </p>
        </div>
      </div>
      <div className={t(`cf dn`)}>
        <div className={t(`fl w-100 w-50-l`)}>
          <p className={t(`f5 pv4`)}>
            During high tides, water would flow directly into the pools from the
            nearby ocean, recycling the <span className={t(`db f4 f3-m f1-l fw6 measure lh-title`)}>two million US gallons of water in about an hour. </span>
          </p>
        </div>
        <div className={t(`fl w-100 w-50-l`)}>
          <p className={t(`f5`)}>
            During low tides, a powerful turbine water pump,
            built inside a cave at sea level, could be switched on from a control
            room and could fill the tanks at a rate of 6,000 US gallons a minute,
            recycling all the water in five hours.
          </p>
        </div>
      </div>
      <div className={t(`cf`)}>
        <div className={t(`fl w-100 w-50-l pr2-l pb3`)}>
          <img className={t(`db w-100`)} src="http://mrmrs.github.io/photos/010.jpg" alt="Photo of a dusk skyline above a grassy rockface covered in trees." />
        </div>
        <div className={t(`fl w-50 w-50-l pr1 pr0-l pl2-l pb3`)}>
          <img className={t(`db w-100`)} src="http://mrmrs.github.io/photos/011.jpg" alt="Photo of the sea and sky on the horizon with the foundations of a demolished house." />
        </div>
        <div className={t(`fl w-50 w-50-l pl2 pl0-l pr2-l pb3`)}>
          <img className={t(`db w-100`)} src="http://mrmrs.github.io/photos/012.jpg" alt="Photo of the sea with mist covering the rocky formations near the shore." />
        </div>
        <div className={t(`fl w-100 w-50-l pl2-l`)}>
          <img className={t(`db w-100`)} src="http://mrmrs.github.io/photos/013.jpg" alt="Photo of the foundations of a building on a cliff overlooking a lighthouse." />
        </div>
      </div>
    </div>
  </div>
</article>)
