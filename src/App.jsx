import { useEffect, useRef, useState } from 'react'
import grapesjs from 'grapesjs'
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import gjsNavbar from 'grapesjs-navbar'
import gjsTabs from 'grapesjs-tabs'
import gjsForms from 'grapesjs-plugin-forms'
import gjsCountdown from 'grapesjs-component-countdown'
import gjsCustomCode from 'grapesjs-custom-code'
import gjsTooltip from 'grapesjs-tooltip'
import gjsBlockFlexbox from 'grapesjs-blocks-flexbox'
import gjsImageEditor from 'grapesjs-tui-image-editor'
import gjsStyleFilter from 'grapesjs-style-filter'
import gjsBlocksBasic from 'grapesjs-blocks-basic'

import './assets/styles/main.scss'

function App() {
  const [editor, setEditor] = useState(null)
  const ref = useRef(editor)

  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      domComponents: {},
      plugins: [gjsPresetWebpage, gjsNavbar, gjsTabs, gjsBlocksBasic, gjsForms, gjsCountdown, gjsCustomCode, gjsTooltip, gjsBlockFlexbox, gjsImageEditor, gjsStyleFilter],
      pluginsOpts: {
        gjsPresetWebpage: {
          modalImportTitle: 'Import Template',
          modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
          modalImportContent: function (editor) {
            return editor.getHtml() + '<style>' + editor.getCss() + '</style>'
          },
        },
        gjsBlocksBasic: {
          flexgrid: true
        },
        gjsNavbar: {},
        gjsTabs: {
          tabsBlock: { category: 'Extra' }
        },
        gjsForms: {},
        gjsCountdown: {},
        gjsCustomCode: {},
        gjsTooltip: {},
        gjsBlockFlexbox: {},
        gjsImageEditor: {
          script: [
            // 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
            'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
            'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
            'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
          ],
          style: [
            'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
            'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css',
          ],
        },
      },

    });

    setEditor(editor);
  }, []);

  return (
    <>
      <div className="App" ref={editor}>
        <div id="editor"></div>
      </div>
    </>
  )
}

export default App
