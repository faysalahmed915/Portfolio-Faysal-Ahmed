import React from 'react';
import Marquee from 'react-fast-marquee';

const SkillsMarquee = () => {
    return (
        <div className='flex md:flex-row flex-col justify-between items-center gap-6 bg-gradient-to-br from-base-300 to-base-100 p-3 px-5 rounded-md shadow-xl'>
            <Marquee speed={30} gradient={false} direction='left' pauseOnHover className="text-lg font-semibold text-gradient-to-br from-base-300 to-base-100">
                🚀 MERN Stack | React.js | Node.js | Express.js | MongoDB | Tailwind CSS | REST API | Git & GitHub | Firebase | Redux | JavaScript | HTML5 & CSS3 | Responsive Design | Problem Solving | Debugging | UI/UX Focus | Continuous Learning
            </Marquee>
        </div>
    );
};

export default SkillsMarquee;