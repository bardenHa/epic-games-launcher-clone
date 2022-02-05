import type { NextPage } from 'next'

import WorkInProgress from '@/components/WorkInProgress'

const Store: NextPage = () => {
  return (
    <>
      <WorkInProgress text="store" />
      <WorkInProgress />
    </>
  )
}

export default Store
