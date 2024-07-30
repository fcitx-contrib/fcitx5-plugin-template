// Refer to https://github.com/fcitx-contrib/fcitx5-plugin-template/blob/master/src/global.d.ts for latest version.

declare global {
  interface CandidateAction {
    id: number
    text: string
  }

  interface Candidate {
    text: string
    label: string
    comment: string
    actions: CandidateAction[]
  }

  type SCROLL_STATE = 0 | 1 | 2

  interface CurlArgs {
    method?: 'GET' | 'POST' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PUT' | 'PATCH'
    headers?: { [key: string]: string }
    data?: string // ignored if `json` exists
    json?: JSON
    binary?: boolean
    timeout?: number // milliseconds
  }

  interface CurlResponse {
    status: number
    data: string
  }

  interface FcitxPlugin {
    load: () => void
    unload: () => void
  }

  interface Window {
    // APIs that can be hooked.
    setCandidates: (cands: Candidate[], highlighted: number, markText: string, pageable: boolean, hasPrev: boolean, hasNext: boolean, scrollState: SCROLL_STATE, scrollStart: boolean, scrollEnd: boolean) => void
    setLayout: (layout: 0 | 1) => void
    updateInputPanel: (preeditHTML: string, auxUpHTML: string, auxDownHTML: string) => void
    resize: (dx: number, dy: number, dragging: boolean, hasContextmenu: boolean) => void
    setTheme: (theme: 0 | 1 | 2) => void
    setAccentColor: (color: number | null) => void
    setStyle: (style: string) => void
    setWritingMode: (mode: 0 | 1 | 2) => void

    // No CORS restriction and all headers are customizable.
    curl?: (url: string, args?: CurlArgs) => Promise<CurlResponse>

    // Log to stderr.
    fcitxLog: (...args: unknown[]) => void

    pluginManager: {
      register: (plugin: FcitxPlugin) => void
    }
  }
}

export {}
