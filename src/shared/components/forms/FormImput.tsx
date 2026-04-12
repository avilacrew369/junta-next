import clsx from "clsx"
import {InputHTMLAttributes} from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export default function FormImput(props : Props) {

  const { className } = props
  return (
   <input
      {...props}
      className={clsx("border border-slate-200 w-full p-2", className)} />
  )
}
