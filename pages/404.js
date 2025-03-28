import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Ooops! That page cannot be found :C</h2>
      <p>Redirecting to the <Link href="/">Home Page</Link> for more marmite goodness...</p>

      <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  )
}
