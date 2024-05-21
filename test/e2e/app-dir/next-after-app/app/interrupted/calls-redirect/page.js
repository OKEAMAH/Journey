import { redirect } from 'next/navigation'
import { unstable_after as after } from 'next/server'
import { cliLog } from '../../../utils/log'

export default function Page() {
  after(() => {
    cliLog({
      source: '[page] /interrupted/calls-redirect',
    })
  })
  redirect('/interrupted/redirect-target')
}
