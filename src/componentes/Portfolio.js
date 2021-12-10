import React from 'react';
import Cor from './img/crello-CorBussines.jpg'
import Flyp from './img/crello-flipchart.jpg'
import Easy from './img/crello-Easy.jpg'

const Portfolio = props => {
    return (
        <div>
            <div id='portfolio' className='container-fluid text-center bg-grey'>
                <h2>ESTUDE CONOSCO</h2><br />
                <h4>Especialista em Gestão e Controle de Qualidade</h4>
                <div className='row text-center slide'>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <img src={Cor} alt='corbussines' width='400' height='300' />
                            <p><strong>Gestores</strong></p>
                            <p>A demanda por gerentes especialistas é alta. Pois é um profissional valioso para empresas de diferentes segmentos. </p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <img src={Flyp} alt='flypshart' width='400' height='300' />
                            <p><strong>Consultores</strong></p>
                            <p>Em vez de ocupar uma posição permanente em uma única empresa, você pode trabalhar como especialista temporário.</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='thumbnail'>
                            <img src={Easy} alt='San Francisco' width='400' height='300' />
                            <p><strong>Estudantes</strong></p>
                            <p> Trabalhar como especialista aumenta a empregabilidade profissional, que ganha experiência e conhecimento.</p>
                        </div>
                    </div>
                </div><br />

                <h2>Motivos para se especializar em Gestão e Controle de Qualidade</h2>
                <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                    {/* Indicators*/}
                    <ol className='carousel-indicators'>
                        <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                        <li data-target='#myCarousel' data-slide-to='1'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                    </ol>

                    {/* Wrapper for slides*/}
                    <div className='carousel-inner' role='listbox'>
                        <div className='item active'>
                            <h4>O salário médio nacional é de:
                                R$ 8.154,29 *<br /><span>*Este valor é referente ao cargo de Engenheiro de Controle de Qualidade</span></h4>
                        </div>
                        <div className='item'>
                            <h4>Alta demanda de profissionais de Gestão e Controle de Qualidade<br /><span> Cerca de 58% dos gestores possuem Especialização </span></h4>
                        </div>
                        <div className='item'>
                            <h4>Criação de uma forte rede de contatos<br /><span>Profissionais especialistas criam, ao longo da sua carreira, uma forte rede de contatos. Aumento de Networking. </span></h4>
                        </div>
                    </div>

                    {/* Left and right controls*/}
                    <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                        <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                        <span className='sr-only'>Previous</span>
                    </a>
                    <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                        <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                        <span className='sr-only'>Next</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;