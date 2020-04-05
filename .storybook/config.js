import {configure, addParameters, addDecorator} from '@storybook/react'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import '@storybook/addon-console'

import StylesDecorator from './styles-decorator'

addDecorator(StylesDecorator)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'ipad',
  },
})

const loaderFn = () => {
  const exportStories = [
    /**
     * Have the Welcome story been loaded first.
     * This will make the Welcome be presented first when StoryBook is loaded in the Browser.
     */
    require('./welcome/Welcome.story.mdx'),
  ]

  /* Automatically import all files ending in *.stories.js or *.stories.mdx */
  const req = require.context('../src', true, /\.stories\.(js|mdx)$/)
  req.keys().forEach(fileName => exportStories.push(req(fileName)))

  return exportStories
}

configure(loaderFn, module)
