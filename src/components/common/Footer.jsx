export default function Footer(){
    return(
        <footer className="border-t mt-10">
            <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Huy.dev — Built with React + Vite
            </div>
        </footer>
    );
}