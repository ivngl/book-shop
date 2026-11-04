import { useRef } from "react"
import style from "./Burger.module.css"

export default function Burger() {
	const burgerRef = useRef<HTMLDivElement>(null)

	function handleMenu() {
		burgerRef.current.classList.toggle(style.open)
	}
	return (
		<>
			<div ref={burgerRef} className={style.burger}>
				<button onClick={handleMenu} className={style.burger_btn}>
					<span className={style.burger_line} />
					<span className={style.burger_line} />
					<span className={style.burger_line} />
			</button>
			<ul className={style.burger_menu}>
      <li>Burger</li>
				</ul>
			</div>
		</>

  )
}
