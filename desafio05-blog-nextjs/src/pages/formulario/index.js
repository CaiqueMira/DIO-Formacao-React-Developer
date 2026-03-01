import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
  createPost
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import Input from '../../components/Input';
import { useForm } from "react-hook-form"
import Textarea from '../../components/Textarea';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FaAngleLeft } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import ButtonLink from '../../components/ButtonLink';
import Button from '../../components/Button';


const components = {
  a: CustomLink,
  Head,
};

export default function Formulario({
  post,
  globalData,
  isEditMode
}) {
  const {
    register,
    handleSubmit,
    watch,    
    formState: { errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      titulo: post?.title ?? '',
      descricao: post?.description ?? '',
      corpo: post?.body ?? ''
    }
  });



  const router = useRouter();

  const onSubmit = async (data) => {
    let response;
    if (isEditMode) {
      response = await axios.put(`/api/post/${post.id}`, data);
    } else {
      response = await axios.post('/api/post', data);
    }
    
    if(response.status === 201 || response.status === 204) {
      const message = `Post ${isEditMode ? 'atualizado' : 'criado'} com sucesso!`;
      alert(message);
      router.push('/');
    }
  }

  return (
    <Layout>

      <SEO
        title={`${isEditMode ? post.title || ' -' : 'Novo post'} - ${globalData.name}`}
        description={isEditMode && post.description}
      />

      <Header name={globalData.name} />

      <div className='xl:absolute xl:top-32 xl:left-80 flex justify-end mb-4'>
        <ButtonLink url="/" className="w-28" label="Voltar" leftIcon={<FaAngleLeft className='text-primary text-xl'/>}/>
      </div>

      <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {isEditMode ? 'Editar post' : 'Novo post'}
      </h1>

      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <Input label="Título" register={register("titulo", {required: true})} errors={errors.titulo} className="mb-6"/>
        <Textarea label="Descrição" register={register("descricao", {required: true})} errors={errors.descricao} className="mb-6"/>
        <Textarea label="Corpo" register={register("corpo", {required: true})} errors={errors.corpo} className="mb-6"/>
        <Button 
          className="m-auto w-28" 
          label={isEditMode ? "Salvar" : 'Enviar'} 
          leftIcon={isEditMode ? <FaRegEdit className='text-primary text-lg'/> : <FaUpload className='text-primary text-lg'/>} 
          type="submit"
        />
        {/* <button className='m-auto p-1 flex justify-center items-center gap-1 bg-white dark:bg-gray-900 rounded-3xl w-28 h-10 transition' type='submit'>
          <FaUpload className='text-primary text-lg'/>
          Enviar
        </button> */}
      </form>

      {/* <article className="px-6 md:px-0">
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
      </article> */}
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

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const isEditMode = !!id;

  const globalData = getGlobalData();
  const post = id ? await getPostBySlug(id).then(data => data[0]) : null;

  return {
    props: {
      globalData,
      post,
      isEditMode
    },
  };
};

