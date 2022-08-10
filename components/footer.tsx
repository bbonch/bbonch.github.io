export default function Footer() {
    return (
        <footer className="mt-auto">
            <div className="d-flex flex-row justify-content-center align-items-center">
                <a className="px-1" rel="noreferrer" href="https://www.youtube.com/c/searcherfordiscogs" target="_blank">YouTube</a>
                <a className="px-1" rel="noreferrer" href="http://facebook.com/searcherfordiscogs" target="_blank">Facebook</a>
                <a className="px-1" rel="noreferrer" href="https://www.instagram.com/discogssearcher" target="_blank">Instagram</a>
                <a className="px-1" rel="noreferrer" href="mailto:dmitrysergienko2000@gmail.com">@</a>
            </div>
            <div className="text-center">&copy; <span>{(new Date()).getFullYear()}</span> Searcher for Discogs</div>
        </footer>
    )
}