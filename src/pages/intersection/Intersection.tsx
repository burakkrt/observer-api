import { Container } from '../../../app/global/utilities.styled.ts'
import * as Style from './Intersection.styled.ts'
import { useEffect } from 'react'

const Intersection = () => {
  useEffect(() => {
    const imageElement = document.getElementById('animationImage1')

    if (imageElement) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          imageElement.classList.add('animation-right')
        } else {
          imageElement.classList.contains('animation-right') &&
            imageElement.classList.remove('animation-right')
        }
      })
      observer.observe(imageElement)
    }
  }, [])

  return (
    <>
      <Container>
        <Style.HalfImageContainer>
          <div id="animationImage1" className="img-container left-image">
            <img src="/public/images/gokul-gurang.jpg" alt="Gokun Gurang" />
          </div>
          <div className="infos">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, consectetur corporis dignissimos dolore doloremque
              dolores esse exercitationem explicabo facilis fugit hic magnam
              maiores modi porro quam qui tempore velit voluptatum.
            </p>
          </div>
        </Style.HalfImageContainer>
      </Container>
      <Container>
        <Style.HalfImageContainer>
          <div id="animationImage2" className="img-container right-image">
            <img src="/public/images/beach.jpg" alt="Beach" />
          </div>
          <div className="infos">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, consectetur corporis dignissimos dolore doloremque
              dolores esse exercitationem explicabo facilis fugit hic magnam
              maiores modi porro quam qui tempore velit voluptatum.
            </p>
          </div>
        </Style.HalfImageContainer>
      </Container>
      <Container>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
          assumenda consectetur debitis eligendi, esse facere facilis hic
          impedit labore laboriosam libero magnam molestias neque nisi nobis
          numquam odit officia perferendis perspiciatis quas quia quis quo
          ratione recusandae soluta totam ut! Accusamus, alias aliquid amet
          asperiores blanditiis consectetur culpa dolores enim eos ex expedita
          fugiat maiores molestias non provident quidem temporibus totam vel
          vero voluptatibus! A accusamus, adipisci amet aperiam architecto autem
          ea eligendi est eum eveniet harum id iure iusto magni molestiae neque
          non provident quisquam saepe similique tempore veniam, vitae? Dicta,
          eum exercitationem facere in inventore ipsa temporibus? Consectetur
          distinctio ea eveniet id illum libero magni quae reprehenderit ut
          veniam. Ipsum, labore, nulla. Doloribus esse exercitationem fugiat hic
          suscipit! Aliquam aspernatur atque autem, commodi consectetur eligendi
          fugit, laborum modi nam, natus nesciunt nostrum perferendis
          perspiciatis qui quibusdam quidem velit. At eaque molestias placeat
          quisquam quos, rerum unde. Beatae consequatur enim explicabo laborum
          laudantium modi molestiae mollitia, non, possimus quaerat recusandae
          sapiente, voluptate. Ipsam, non, recusandae. Ea eaque excepturi illum
          labore magni neque nulla quibusdam reprehenderit unde voluptatem!
          Aperiam consectetur facilis nemo quae quidem, sunt unde voluptas
          voluptate? A blanditiis dolorum eveniet natus veniam. Asperiores earum
          modi repellendus saepe voluptas. Ad distinctio dolore dolores ea eaque
          enim expedita facilis harum hic libero minima nam nesciunt nulla
          officiis optio, perferendis placeat quidem reiciendis rem repellendus
          saepe sequi unde vero. Assumenda cum deserunt dolorum ducimus esse
          magnam necessitatibus neque nostrum similique ut. Doloremque esse
          facilis magni molestias odio perferendis quasi, quia quis, quo
          similique tenetur, ut. A ad aspernatur at blanditiis cupiditate
          deleniti deserunt dolores eligendi eveniet facere illum incidunt iusto
          modi nobis nulla perferendis quae, quas quisquam quos recusandae
          sapiente sunt tenetur vel! Ab ea natus saepe. Aliquam consequatur cum,
          deserunt dolorum laboriosam natus nobis tenetur. Ducimus illum ipsum
          neque optio rerum? Dolorem earum explicabo quidem repellat? Ducimus
          fugit illum numquam quam sed sequi velit. A aliquid assumenda beatae
          commodi cumque dicta dolorum earum eligendi eos et fugiat harum id
          ipsa minus mollitia nam, neque, nihil odit officiis pariatur provident
          quaerat quam quos recusandae rem, sint suscipit temporibus totam velit
          voluptas? Distinctio explicabo minima quasi sed? Accusamus aperiam
          consectetur culpa ducimus eaque labore laborum libero, magnam nam
          neque, nobis omnis quas quasi tempore temporibus unde velit! Ad, at
          commodi distinctio eos excepturi facilis illum iste iusto laudantium,
          libero magni natus nulla numquam odit possimus praesentium quasi
          quidem ratione sequi voluptas. Dolorum.
        </p>
        <Style.ImageFullContainer>
          <img
            id="fullImageResize"
            src="/public/images/swimmer.jpg"
            alt="Beach"
          />
        </Style.ImageFullContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          distinctio est eveniet fugit labore molestiae molestias veniam. Ad
          alias, aliquid amet aperiam blanditiis consectetur, doloribus eius
          eveniet explicabo laboriosam libero natus nulla placeat quam similique
          suscipit tenetur ut veritatis voluptatibus. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ab, assumenda consectetur debitis
          eligendi, esse facere facilis hic impedit labore laboriosam libero
          magnam molestias neque nisi nobis numquam odit officia perferendis
          perspiciatis quas quia quis quo ratione recusandae soluta totam ut!
          Accusamus, alias aliquid amet asperiores blanditiis consectetur culpa
          dolores enim eos ex expedita fugiat maiores molestias non provident
          quidem temporibus totam vel vero voluptatibus! A accusamus, adipisci
          amet aperiam architecto autem ea eligendi est eum eveniet harum id
          iure iusto magni molestiae neque non provident quisquam saepe
          similique tempore veniam, vitae? Dicta, eum exercitationem facere in
          inventore ipsa temporibus? Consectetur distinctio ea eveniet id illum
          libero magni quae reprehenderit ut veniam. Ipsum, labore, nulla.
          Doloribus esse exercitationem fugiat hic suscipit! Aliquam aspernatur
          atque autem, commodi consectetur eligendi fugit, laborum modi nam,
          natus nesciunt nostrum perferendis perspiciatis qui quibusdam quidem
          velit. At eaque molestias placeat quisquam quos, rerum unde. Beatae
          consequatur enim explicabo laborum laudantium modi molestiae mollitia,
          non, possimus quaerat recusandae sapiente, voluptate. Ipsam, non,
          recusandae. Ea eaque excepturi illum labore magni neque nulla
          quibusdam reprehenderit unde voluptatem! Aperiam consectetur facilis
          nemo quae quidem, sunt unde voluptas voluptate? A blanditiis dolorum
          eveniet natus veniam. Asperiores earum modi repellendus saepe
          voluptas. Ad distinctio dolore dolores ea eaque enim expedita facilis
          harum hic libero minima nam nesciunt nulla officiis optio, perferendis
          placeat quidem reiciendis rem repellendus saepe sequi unde vero.
          Assumenda cum deserunt dolorum ducimus esse magnam necessitatibus
          neque nostrum similique ut. Doloremque esse facilis magni molestias
          odio perferendis quasi, quia quis, quo similique tenetur, ut. A ad
          aspernatur at blanditiis cupiditate deleniti deserunt dolores eligendi
          eveniet facere illum incidunt iusto modi nobis nulla perferendis quae,
          quas quisquam quos recusandae sapiente sunt tenetur vel! Ab ea natus
          saepe. Aliquam consequatur cum, deserunt dolorum laboriosam natus
          nobis tenetur. Ducimus illum ipsum neque optio rerum? Dolorem earum
          explicabo quidem repellat? Ducimus fugit illum numquam quam sed sequi
          velit. A aliquid assumenda beatae commodi cumque dicta dolorum earum
          eligendi eos et fugiat harum id ipsa minus mollitia nam, neque, nihil
          odit officiis pariatur provident quaerat quam quos recusandae rem,
          sint suscipit temporibus totam velit voluptas? Distinctio explicabo
          minima quasi sed? Accusamus aperiam consectetur culpa ducimus eaque
          labore laborum libero, magnam nam neque, nobis omnis quas quasi
          tempore temporibus unde velit! Ad, at commodi distinctio eos excepturi
          facilis illum iste iusto laudantium, libero magni natus nulla numquam
          odit possimus praesentium quasi quidem ratione sequi voluptas.
          Dolorum.
        </p>
      </Container>
    </>
  )
}

export default Intersection