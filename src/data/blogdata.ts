type blogDataType = {
    title?: string;
    slug?: string;
    content?: string;
    author?: string;
}

const blogdata: blogDataType[] = [];

blogdata.push(
    {
        title: '¿Qué es React?',
        slug: 'que-es-react',
        content: 'React es una biblioteca de JavaScript para construir interfaces de usuario.',
        author: 'Irisval'
    },
    {
        title: 'Introducción a Vue.js',
        slug: 'introduccion-a-vue',
        content: 'Vue.js es un framework progresivo de JavaScript para construir interfaces de usuario.',
        author: 'María López'
    },
    {
        title: 'Conceptos Básicos de Angular',
        slug: 'conceptos-basicos-de-angular',
        content: 'Angular es una plataforma de desarrollo para construir aplicaciones web.',
        author: 'RataxMaster'
    },
    {
        title: 'Comenzando con Node.js',
        slug: 'comenzando-con-nodejs',
        content: 'Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.',
        author: 'Ana'
    },
    {
        title: 'Express.js: Un Framework Minimalista para Node.js',
        slug: 'express-js-framework',
        content: 'Express es un framework web minimalista y flexible para Node.js.',
        author: 'Luis Fernández'
    },
    {
        title: 'Fundamentos de MongoDB',
        slug: 'fundamentos-de-mongodb',
        content: 'MongoDB es una base de datos NoSQL orientada a documentos.',
        author: 'dr1602'
    },
    {
        title: 'GraphQL vs REST',
        slug: 'graphql-vs-rest',
        content: 'GraphQL es un lenguaje de consulta para APIs y una alternativa a REST.',
        author: 'David Martínez'
    },
    {
        title: 'Desarrollo Full Stack con MERN',
        slug: 'desarrollo-full-stack-con-mern',
        content: 'MERN es un stack de desarrollo que incluye MongoDB, Express.js, React y Node.js.',
        author: 'Isabel Torres'
    },
    {
        title: 'Autenticación y Autorización en Aplicaciones Web',
        slug: 'autenticacion-y-autorizacion-en-aplicaciones-web',
        content: 'La autenticación y la autorización son fundamentales para la seguridad en aplicaciones web.',
        author: 'Miguel Hernández'
    },
    {
        title: 'Creación de APIs con Django REST Framework',
        slug: 'creacion-de-apis-con-django-rest-framework',
        content: 'Django REST Framework es una poderosa y flexible herramienta para construir APIs web.',
        author: 'Rosa Ruiz'
    },
    {
        title: 'Introducción a TypeScript',
        slug: 'introduccion-a-typescript',
        content: 'TypeScript es un superconjunto de JavaScript que añade tipado estático opcional.',
        author: 'Javier Jiménez'
    },
    {
        title: 'SASS: CSS con Superpoderes',
        slug: 'sass-css-con-superpoderes',
        content: 'SASS es un preprocesador de CSS que añade funcionalidades como variables, anidamiento y mixins.',
        author: 'Carmen Romero'
    },
    {
        title: 'Webpack: Empaquetador de Módulos para JavaScript',
        slug: 'webpack-empaquetador-de-modulos',
        content: 'Webpack es una herramienta de construcción para JavaScript que permite empaquetar múltiples módulos en uno o varios bundles.',
        author: 'Francisco Ortiz'
    },
    {
        title: 'Pruebas Unitarias en JavaScript con Jest',
        slug: 'pruebas-unitarias-en-javascript-con-jest',
        content: 'Jest es un framework de pruebas unitarias en JavaScript con un enfoque en la simplicidad.',
        author: 'Gloria Morales'
    },
    {
        title: 'CI/CD en Desarrollo Web',
        slug: 'ci-cd-en-desarrollo-web',
        content: 'CI/CD es una práctica de DevOps que permite la integración continua y el despliegue continuo de software.',
        author: 'Ricardo Castillo'
    },
);

export default blogdata;
