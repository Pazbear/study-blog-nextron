import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import Router,{useRouter} from 'next/router'
import { useEffect, useState } from "react"
import { getWorkById } from '../../api/workApi'
import MainLayout from '../../components/MainLayout'
import { useUser } from '../../hooks/useUser'
import React from 'react';
import { PageHeader } from 'antd';

const WorkPage = () => {
    const router = useRouter()
    let {id} = router.query

    const ViewerRef = React.useRef<Viewer>()

    const { useUserLoading, useUserLoggedIn, useUserData, useUserMutate } = useUser();
    useEffect(() => {
      if(!useUserLoggedIn) Router.replace('/home')
    }, [useUserLoggedIn]);
    
    if(useUserLoading) return <>Delay</>;

    const [Work, setWork] = useState(null)

    useEffect(()=>{
        loadWork(id)
    },[id])

    const loadWork = async (workId)=>{
      const response = await getWorkById(workId)
      if(!response.success)
          return;
      setWork(response.work)
      const instance = ViewerRef.current.getInstance()
      instance.setMarkdown(response.work.content)
    }
    return (
        <MainLayout useUserMutate={useUserMutate}>
          <PageHeader 
            style={{border:'1px solid rgb(235, 237,240)'}}
            onBack={() => Router.replace('/home')}
            title={Work && Work.title}
            subTitle={Work && Work.User.nickname}
          />
          <div style={{width:'70%', margin:'0 auto'}}>
            {Work ? <Viewer
              ref={ViewerRef}
	            initialValue={Work.content}
      	    /> : null}
          </div>
        </MainLayout>
    )
}

export default WorkPage