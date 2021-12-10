import React from 'react';

const Precos = props => {
    return (
            <div id='pricing' className='container-fluid'>
                <div className='text-center'>
                    <h2>INVESTIMENTO</h2>
                    <h4>Escolha uma Forma de Pagamento</h4>
                </div>
                <div className='row slide'>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>NORMAL</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>R$100</strong> TAXA DE MATRÍCULA</p>
                                <p><strong>R$ 405</strong> MENSALIDADE</p>
                                <p><strong> R$ 700</strong> MATERIAL DIDÁTICO </p>
                                <p><strong>MATERIAL DIDÁDICO</strong> (PAGAMENTO EM 2X) </p>
                                <p><strong> R$ 405 </strong> 18 PARCELAS</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>R$ 405</h3>
                                <h4>POR MÊS</h4>
                                <button className='btn btn-lg'>INSCREVA-SE</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>PAGAMENTO EM 2X</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>SEM</strong> TAXA DE MATRÍCULA</p>
                                <p><strong>10%</strong> DESCONTO</p>
                                <p><strong>R$ 600</strong> MATERIAL DIDÁTICO</p>
                                <p><strong>MATERIAL DIDÁDICO</strong> (PAGAMENTO EM 4X)</p>
                                <p><strong>R$ 3.280</strong> 2 PARCELAS</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>R$ 3.280</h3>
                                <h4>EM 2X</h4>
                                <button className='btn btn-lg'>INSCREVA-SE</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>PAGAMENTO À VISTA</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>SEM</strong> TAXA DE MATRÍCULA</p>
                                <p><strong>20%</strong> DESCONTO</p>
                                <p><strong>R$ 500</strong> MATERIAL DIDÁTICO</p>
                                <p><strong>MATERIAL DIDÁDICO</strong> (PAGAMENTO EM 6X) </p>
                                <p><strong> R$ 5.832</strong> Á VISTA</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>R$5.832</h3>
                                <h4>À VISTA</h4>
                                <button className='btn btn-lg'>INSCREVA-SE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Precos