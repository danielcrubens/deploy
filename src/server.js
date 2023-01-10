
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
const nunjucks = require('nunjucks')

/* CONFIGURAR NUNJUCKS */
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server
    /* RECEBER DADOS DO REQ.BODY */
    .use(express.urlencoded({ extended: true }))
    /* CONFIGURAR ARQUIVOS ESTÁTICOS (CSS,SCRIPTS,IMAGENS) */
    .use(express.static("public"))
    /* ROTAS DA APLICAÇÃO */
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500);