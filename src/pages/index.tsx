import type { NextPage } from 'next'

import Button from '@/components/buttons/Button'
import WorkInProgress from '@/components/WorkInProgress'

const Home: NextPage = () => {
  return (
    <>
      <WorkInProgress />
      <Button variant="primary">Hello</Button>
    </>
  )
}

export default Home
