import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import ButtonLink from '../../components/ButtonLink';
import Button from '../../components/Button';
import { FaAngleLeft } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';
import { useRouter } from 'next/router';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  post,
  globalData,
}) {
  
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm(`Deseja confirmar a exclusão do post ${post.title}?`)) {
      const response = await axios.delete(`/api/post/${post.id}`);
      
      if(response.status === 204) {
        alert('Post excluído com sucesso!');
        router.push('/');
      }
    }
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`}
        description={post.description}
      />
      <Header name={globalData.name} />
      <div className='xl:absolute xl:top-32 xl:left-80 mb-4'>
        <ButtonLink url="/" className="w-28" label="Voltar" leftIcon={<FaAngleLeft className="text-primary text-xl" />} />
      </div>
      <div className='xl:absolute xl:top-32 xl:right-80 flex flex-col gap-4 w-full items-end'>
        <ButtonLink url={`/formulario?id=${post.id}`} className="w-36" label="Editar post" leftIcon={<FaRegEdit className="text-primary text-xl"/>}/>
        <Button className="w-36" label="Excluir post" leftIcon={<FaRegTrashAlt className="text-primary text-xl"/>} onClick={handleDelete}/>
      </div>
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {post?.title}
          </h1>
          {post?.description && (
            <p className="text-xl mb-4">{post?.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            {post.body}
          </article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const post = await getPostBySlug(params.id).then(data => data[0]);

  return {
    props: {
      globalData,
      post,
    },
  };
};

