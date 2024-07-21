import Link from "next/link";

export default function Custom404() {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>404 - Page Not Found</h1>
            <Link style={{backgroundColor: 'dodgerblue' }} href={"/"} >
                Take me back to home page
            </Link>
        </div>
    );
}
