import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { GLOBAL_THEME } from '../../Constants/globalTheme.const'

/**
 * @description Component to provide Global theme
 * @link to convert RGB to HSV https://www.rapidtables.com/convert/color/rgb-to-hsl.html
 */

type GlobalThemePropsType = {
  children: ReactElement | null
}

export const GlobalTheme: React.FunctionComponent<GlobalThemePropsType> = (
  props: GlobalThemePropsType
): ReactElement => {
  const getThemeRemotely: Function = () => {
    try {
      document.getElementsByTagName('body')[0].style.display = 'none'
      require(`./index.style.less`)
      document.getElementsByTagName('body')[0].style.display = 'flex'
    } catch (error: any) {
      console.info('RouterScreensConfig [115]', { msg: error.message })
    }
  }

  getThemeRemotely()

  return <ThemeProvider theme={GLOBAL_THEME}>{props.children}</ThemeProvider>
}
