import styles from "./Body.module.css";
// import SearchTemplate from "../SearchTemplate/SearchTemplate";
import Carousel from "react-bootstrap/Carousel"


function Body() {

    return (
        <main className={styles.body}>
            {/* <SearchTemplate/> */}

            <Carousel className={styles.carousel}>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://images.pexels.com/photos/4512259/pexels-photo-4512259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagem do carro" />
                        <Carousel.Caption className={styles.carouselText}>
                        <h3 className={styles.carouselTitle}>Categoria Econômica</h3>
                        <p className={styles.carouselDescricao}>O carro ideal qualquer ocasião, estilo e personalidade</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://images.pexels.com/photos/6649925/pexels-photo-6649925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagem do carro" />
                        <Carousel.Caption className={styles.carouselText}>
                        <h3 className={styles.carouselTitle}>Categoria Intermediária</h3>
                        <p className={styles.carouselDescricao}>O carro ideal qualquer ocasião, estilo e personalidade</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles.imgCarousel} src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Imagem do carro" />
                        <Carousel.Caption className={styles.carouselText}>
                        <h3 className={styles.carouselTitle}>Categoria Executiva</h3>
                        <p className={styles.carouselDescricao}>O carro ideal qualquer ocasião, estilo e personalidade</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            

             <div className={styles.cardCars}>
               
                <div className={styles.cardForTitle}>
                <h2 className={styles.cardTitle}>Recomendações</h2>
                </div>    

                <section className={styles.sectionCard}>
                    <div className={styles.cardContainer}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    </div>
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section> 

                <section className={styles.sectionCard}>
                    <div className={styles.cardContainer}>
                    <img className={styles.imgCar} src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960" alt="Imagem do carro" />
                    </div>
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section>   

                <section className={styles.sectionCard}>
                    <div className={styles.cardContainer}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    </div>
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section>  

                <section className={styles.sectionCard}>
                    <div className={styles.cardContainer}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    </div>
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section> 

                <section className={styles.sectionCard}>
                    <div className={styles.cardContainer}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    </div>
                    <p className={styles.modelCar}>MERCEDES-BENZ A 35 AMG</p>
                    <div className={styles.yearCar}>
                        <span className={styles.span}>Ano 2020/2021</span>
                        <button className={styles.buttonCar}>Ver mais...</button>
                    </div>
                </section>   

                <section className={styles.sectionCard}>
                    <div className={styles.cardContainer}>
                    <img className={styles.imgCar} src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202310/20231024/mercedesbenz-a-35-amg-2.0-cgi-gasolina-4matic-7gdct-wmimagem07390147495.jpg?s=fill&w=552&h=414&q=60" alt="Imagem do carro" />
                    </div>
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