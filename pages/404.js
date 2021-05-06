import Layout from '../components/Layout';
import Link from 'next/link';

const custom404 = () => (
    <Layout>
        <section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Ooops! La pagina que buscas no existe
		</h3>
		
		<p>Parece que estas perdido, presiona Home para volver</p>
            <Link href="/" >
                <a className="link_404">Ir a Home</a>
            </Link>
    </div>
		</div>
		</div>
		</div>
	</div>
</section>
    </Layout>
)

export default custom404;