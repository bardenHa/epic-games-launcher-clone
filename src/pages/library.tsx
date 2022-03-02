import type { NextPage } from 'next'

import WorkInProgress from '@/components/WorkInProgress'

const Library: NextPage = () => {
  return (
    <>
      <WorkInProgress text="library" />
      <WorkInProgress />
    </>
  )
}

export default Library
