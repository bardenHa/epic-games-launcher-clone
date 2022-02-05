import type { NextPage } from 'next'

import WorkInProgress from '@/components/WorkInProgress'

const Store: NextPage = () => {
  return (
    <>
      <WorkInProgress text="unreal engine" />
      <WorkInProgress />
    </>
  )
}

export default Store
