import PrimeTable from "@/components/DataTable/PrimeTable"
import LineChart from "@/components/LineChart/LineChart"
import dynamic from "next/dynamic"
import Link from "next/link"
import "./globals.css"

export default function Home() {
  const OpenStreetMap = dynamic(() => import("../components/Map"), {
    ssr: false,
  })

  return (
    <main>
      <header className="py-20 px-4 md:px-80 bg-[#EDF1F5] min-h-[calc(100vh-64px)]">
        <h2 className="text-6xl font-bold text-dark">
          Climate risk could end up as your financial risk
        </h2>
        <p className="max-w-[55ch] text-text">
          Earth is facing climate change problems at an unprecedented rate. With riskthinking, users
          can now peek into the future with worldwide data all in the palm of their hands. The first
          and only true enterprise solution for climate financial risk.
        </p>

        <Link href="/"></Link>
      </header>
      <section className="flex justify-between py-52 gap-8 bg-black px-4 md:px-80">
        <div className="flex flex-col justify-around ">
          <h3 className="text-5xl font-semibold text-white">
            Worldwide <span className="text-accent">risk</span> ratings
          </h3>
          <p className="max-w-[50ch] text-[#f2f2f2] text-md tracking-wide text-[0.85rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis cupiditate tempora
            provident ut ea vitae fugit quas atque nisi molestias temporibus, eius sint voluptate
            sit corporis officia labore? Tempore quidem rem hic obcaecati ipsam fugit ab labore?
            Velit quasi, ex natus blanditiis nobis sequi porro iste error ipsa nam expedita!
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-sm text-white font-semibold">Try filtering by decade →</p>
            <button className="scrollbar flex min-w-[12rem] items-center  justify-between rounded bg-accent px-6 py-3 text-[0.845rem] shadow-md ring-1 ring-black/[.15] transition-colors hover:bg-text hover:text-primary">
              2030
            </button>
          </div>
        </div>
        <div className="ring-4 ring-accent shadow-md">
          <OpenStreetMap />
        </div>
      </section>

      <section className="flex justify-between  py-52 flex-row-reverse gap-8  bg-[#EDF1F5] px-4 md:px-80">
        {" "}
        <div className="flex flex-col justify-around ">
          <h3 className="text-5xl font-semibold text-dark">
            Easily digestible data in every form imaginable
          </h3>
          <p className="max-w-[50ch] text-text text-md tracking-wide text-[0.85rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias illum et
            minima, cumque ab libero consequatur culpa veritatis? Enim, magni libero. Tempora rerum
            doloremque numquam impedit perspiciatis illum consequatur illo sunt beatae, aperiam
            totam?
          </p>
          <div className="flex gap-4 items-center">
            <button className="scrollbar flex min-w-[12rem] items-center  justify-between rounded bg-accent px-6 py-3 text-[0.845rem] shadow-md ring-1 ring-black/[.15] transition-colors hover:bg-text hover:text-primary">
              Visit the data table →
            </button>
          </div>
        </div>
        <div className="ring-4 ring-accent shadow-md basis-1/2 max-w-[700px] p-4">
          <LineChart />
        </div>
      </section>

      <section className="flex justify-between py-52 gap-8 bg-black px-4 md:px-80">
        <div className="flex flex-col justify-around ">
          <h3 className="text-5xl font-semibold text-white">
            Tabulated data for multiple <span className="text-accent">asset types</span> and
            <span className="text-accent"> risk factors</span>
          </h3>
          <p className="max-w-[50ch] text-[#f2f2f2] text-md tracking-wide text-[0.85rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit cum deserunt soluta vel
            dolores quasi ad aut rem odio porro repellat accusamus expedita corporis minus, saepe
            deleniti perspiciatis voluptate aspernatur delectus! Atque sequi reprehenderit iusto,
            necessitatibus fuga mollitia autem maxime dolore dolor quis id ipsum illum non nihil
            asperiores ipsam culpa accusamus blanditiis sit eligendi libero suscipit at. Sunt, esse.
          </p>
          <div className="flex gap-4 items-center">
            <button className="scrollbar flex min-w-[12rem] items-center  justify-between rounded bg-accent px-6 py-3 text-[0.845rem] shadow-md ring-1 ring-black/[.15] transition-colors hover:bg-text hover:text-primary">
              Visit the data table →
            </button>
          </div>
        </div>
        <div className="ring-4 ring-accent shadow-md max-w-[700px]">
          <PrimeTable hideCategories={true} rowAmount={10} />
        </div>
      </section>
    </main>
  )
}
