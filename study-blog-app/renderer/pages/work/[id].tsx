import { useRouter } from 'next/router'

const Work = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Work: {id}</p>
}

export default Work