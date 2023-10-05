import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex items-center bg-slate-100 p-4 rounded-lg gap-5 my-3">
        <button type="button" className="btn btn-secondary">Latest News</button>
  <p className="font-poppins text-lg font-medium">
  <Marquee>
      To get the latest match highlights for the Germany vs. Spain game, I recommend checking sports news websites, official social media accounts of the teams, or sports broadcasting networks. They will provide up-to-date information on the match and its highlights as it happens.
      </Marquee>
  </p>
    </div>
  );
};

export default BreakingNews;
