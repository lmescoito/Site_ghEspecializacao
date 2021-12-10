import React from 'react';
import Meeting from './img/crello-Meeting.jpg'
import Online from './img/crello-online.jpg'
import Pos from './img/crello-pos.jpg'
import In from './img/crello-incompany.jpg'
import Certify from './img/crello-certify.jpg'
import Free from './img/crello-Free.jpg'

const Servicos = props => {
    return (
        <div id='services' className='container-fluid text-center'>
            <h2>CURSOS</h2>
            <h4>O que oferecemos!!</h4>
            <br />
            <div className='row'>
                <div className='col-sm-4'>
                    <img src={Online} alt='' width='400' height='300' />
                    <h4>CURSOS ON LINE</h4>
                    <p>Conteúdo desenvolvido no formato de videoaulas, ideais para quem deseja se destacar no mercado de trabalho e quer aprender novas habilidades para evoluir profissionalmente.</p>
                </div>
                <div className='col-sm-4'>
                    <img src={Meeting} alt='' width='400' height='300' />
                    <h4>CURSOS DE ESPECIALIZAÇÃO</h4>
                    <p>Caráter Lato Sensu (Especialização)</p>
                </div>
                <div className='col-sm-4'>
                    <img src = {Pos} alt='pos'width='400' height='300'/>
                    <h4>PÓS-GRADUAÇÃO</h4>
                    <p>Presencial</p>
                    <p>EAD</p>
                </div>
            </div>
            <br /><br />
            <div className='row'>
                <div className='col-sm-4'>
                    <img src= {In} alt = 'incompany' width = '400' height = '300'/>
                    <h4>IN COMPANY</h4>
                    <p>As especializações no formato In Company são estruturados exatamente para atender demandas específicas de organizações, empresas de terceiro setor e governo e mantém toda a qualidade e credibilidade de nossa instituição, com professores renomados e um ensino de alto padrão.</p>
                </div>
                <div className='col-sm-4'>
                    <img src = {Certify} alt = 'certificado' width = '400' height = '300'/>
                    <h4>CERTIFICADOS</h4>
                    <p>Certificado de conclusão do curso será expedido pelo CENTRO DE REGISTRO E INDICADORES ACADEMICOS da UFPA.</p>
                </div>
                <div className='col-sm-4'>
                    <img src = {Free} alt = 'Curso Livre' width = '400' height = '300'/>
                    <h4>CURSOS LIVRES</h4>
                    <p>EM BREVE!</p>
                </div>
            </div>
        </div>
    )
}
export default Servicos;