import { useEffect, useState } from 'react'
import { executeWorkflowNode } from '@unifyapps/app-builder-sdk/hooks/workflow'

const AUTOMATION_ID = '6a64c6c6737f9c3b69f18db5'
const DATA_SOURCE_ID = 'e_6a64c8e807a7560daae90b21'
const RESOURCE_VERSION = 5512

function extractText(body: unknown): string {
  if (typeof body === 'string') return body
  if (body && typeof body === 'object') {
    const record = body as Record<string, unknown>
    const candidate = record.result ?? record.about ?? record.text ?? record.output
    if (typeof candidate === 'string') return candidate
  }
  return ''
}

type AboutMeState = {
  aboutText: string
  isLoading: boolean
  error: unknown
}

export function useAboutMe(): AboutMeState {
  const [state, setState] = useState<AboutMeState>({
    aboutText: '',
    isLoading: true,
    error: undefined,
  })

  useEffect(() => {
    let isActive = true

    async function run() {
      try {
        const result = (await executeWorkflowNode({
          context: {
            appName: 'callables',
            resourceName: 'callables_call_automation',
            resourceVersion: RESOURCE_VERSION,
          },
          id: DATA_SOURCE_ID,
          inputs: {
            automationId: AUTOMATION_ID,
            version: '-1',
            runtimeConnections: {},
            parameters: {
              __internals__: {
                m: 'BUILDER',
                s: 'global-page-of-code-builder',
                c: 'PLATFORM',
                p: 'browser',
              },
            },
            synchronous: true,
          },
          options: {},
        })) as { response?: { body?: unknown } }

        if (!isActive) return
        setState({
          aboutText: extractText(result?.response?.body),
          isLoading: false,
          error: undefined,
        })
      } catch (caught) {
        if (!isActive) return
        setState({ aboutText: '', isLoading: false, error: caught })
      }
    }

    run()
    return () => {
      isActive = false
    }
  }, [])

  return state
}
