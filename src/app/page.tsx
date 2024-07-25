import BoxBanner from "@/components/Banner/BoxBanner";
import BoxCursos from "@/components/Cursos/BoxCursos";
import GaleryBox from "@/components/galery/GaleryBox";
import NavBox from "@/components/NavBar/NavBox";
import SideBox from "@/components/SideMenu/SideBox";
import BoxSobre from "@/components/sobre/BoxSobre";


export default function Home() {
  return (
    <>
      <header>
        <NavBox/>
        <BoxBanner/>
      </header>
      <main>
          <SideBox/>
          <BoxCursos/>
          <BoxSobre/>
          <GaleryBox/>
      </main>
      <footer>

      </footer>
      
      
    </>
  );
}
