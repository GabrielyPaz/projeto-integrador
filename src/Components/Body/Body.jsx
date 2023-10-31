import styles from "./Body.module.css";
import SearchTemplate from "../SearchTemplate/SearchTemplate";
import Carousel from "react-bootstrap/Carousel"

function Body() {

    return (
        <main className={styles.body}>
            <SearchTemplate/>

            <Carousel className={styles.carousel}>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            <div className={styles.cardCars}>

                <section className={styles.sectionCard}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section> 

                <section className={styles.sectionCard}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section>   

                <section className={styles.sectionCard}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section>  

                <section className={styles.sectionCard}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section> 

                <section className={styles.sectionCard}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section>   

                <section className={styles.sectionCard}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section>   
                
            </div>  
        </main>
    )

}

export default Body