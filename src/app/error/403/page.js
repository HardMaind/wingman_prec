'use client';

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

const Error403 = () => {
    const router = useRouter();
    return (
        <>
            <section className="forbidden">
                <h3 className="pt-32" >403</h3>
                <p>You do not have permission to view this directory.</p>
                <span className="cursor-pointer hover:text-blue-500" onClick={() => router.push(paths.home.root)}>Return to home page</span>
            </section>
        </>
    )
}

export default Error403

