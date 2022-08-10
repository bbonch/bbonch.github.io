import Question from "./question";

export default function Questions() {
    return (
        <div className="accordion" id="faq">
            <Question questionId='question1' accordionId='faq' question='What is it?' answer={
                <div>Searcher for Discogs is the Google Chrome browser extension for the <a className="text-reset" rel="noreferrer" href="https://www.discogs.com" target="_blank">Discogs</a> site. With it you can discover new music and searching for records to buy more easily. Just click on any track in any release and you will see a popup with a video.</div>
            } />
            <Question questionId='question2' accordionId='faq' question='What video sources does it support?' answer={
                <div>Extension supports YouTube, Spotify and Deezer. It uses YouTube by default. You can change default video source on settings page.</div>
            } />
            <Question questionId='question3' accordionId='faq' question='Why does it show wrong video?' answer={
                <div>Unfortunately, not all tracks are available in the internet. If it is not on YouTube, try Spotify or Deezer.</div>
            } />
            <Question questionId='question4' accordionId='faq' question='Why does it show wrong video?' answer={
                <div>Unfortunately, not all tracks are available in the internet. If it is not on YouTube, try Spotify or Deezer.</div>
            } />
            <Question questionId='question5' accordionId='faq' question='Is it free?' answer={
                <div>Yes, it is.</div>
            } />
            <Question questionId='question6' accordionId='faq' question='Why does it ask for permisssions?' answer={
                <div>To be able to access and handle video sources and license information.</div>
            } />
            <Question questionId='question7' accordionId='faq' question='Can not find answer?' answer={
                <div>Let us know if you have any question or suggestion <a className="text-reset" href="mailto:dmitrysergienko2000@gmail.com">here</a>.</div>
            } />
        </div>
    )
}