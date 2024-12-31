import Link from "next/link";

export default function JoinList() {
    return (
        <div className="absolute top-4 right-4 z-50">
            <Link href="/apply">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 hover:shadow-xl transition-all duration-200">
                    Join The List
                </button>
            </Link>
        </div>
    );
}
