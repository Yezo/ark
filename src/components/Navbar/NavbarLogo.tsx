export default function NavbarLogo() {
  //Some of the PrimeReact's Data Table's CSS doesn't get rendered
  //properly if you use a NextJS Link lol
  return (
    <h1 className="text-2xl font-bold tracking-tighter ">
      <a href="/">
        <span className="text-accent" data-testid="span">
          risk
        </span>
        <span className="font-light" data-testid="span">
          thinking
        </span>
        <span className="text-accent" data-testid="span">
          .AI
        </span>
      </a>
    </h1>
  )
}
