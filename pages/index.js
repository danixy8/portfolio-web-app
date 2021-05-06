import Link from 'next/link';
import Layout from '../components/Layout';
import {skills, experiences} from '../profile';

const Index = () => (
    <Layout>
        {/* header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/daniel-p.jpeg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Daniel Gutierrez</h1>
                            <h2>Fullstack Developer</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tempore porro iste 
                                nemo aperiam animi et quisquam voluptas nesciunt fugit, ad, qui modi incidunt deleniti
                                repellendus magnam accusamus soluta. Assumenda.
                            </p>
                                <Link href="/hireme">
                                <a className="btn btn-outline-light">Contactar</a>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    {/* second section */}
    <div className="row py-2">
        <div className="col-md-4">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Skills</h1>
                    { 
                        skills.map(({skill, percent}, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                            <div className="progress">
                                <div    className="progress-bar bg-warning" 
                                        role="progressbar" 
                                        style={{width: `${percent}%`}}>
                                </div>
                            </div>
                        </div>
                    )) 
                    }
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card bg-light">
                <div className="card-body">
                    <h1 className="pb-2">Experiencia</h1>
                    <ul>
                        {
                            experiences.map(({title, description, period}, i) => (
                                <div key={i}>
                                    <li>
                                        <h3>{title}</h3>
                                        <h5 >{period}</h5>
                                        {description.map((item, i) => <p className="space" key={i}>{item}</p>)}
                                    </li><br/>
                                </div>
                            ))
                        }
                        
                    </ul>
                    <Link href="/experiences">
                    <a className="btn btn-dark">Conoce mas</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    </Layout>
)

export default Index;