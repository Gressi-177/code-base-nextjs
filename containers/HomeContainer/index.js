import Container from "~/components/base/Container";
import { RightUpArrow } from "~/public/assets/svgs";

const listCategory = [
  'Futuristic',
  'AI',
  'Blockchain',
  'MACHINE',
  'Updating',
  'FAST',
  'Technology',
  'Owner',
  'Support human',
  'INTELLIGENCE'
]

const CategoryBox = ({ title }) => {
  return <div className="bg-[#FFFFFF1F] border-[1px] border-solid border-[#FFFFFF3D] py-[14px] px-[25px] text-[12px] text-white font-[500] uppercase tracking-[1.44px]">
    {title}
  </div>
}

function HomeContainer() {
  return <Container className={'relative'}>
    <div className="mt-[16px] border-b-[1px] border-solid border-white flex justify-between gap-[16px]">
      <div className="border-solid border-white border-l-[1px] border-r-[1px] flex items-center justify-center w-max px-[20px] pb-[20px] pt-[8px]">
        <img src="/imgs/logo.svg" className="h-[54px] " />
      </div>
      <div className="flex">
        <div className="border-solid border-white border-l-[1px] border-r-[1px] flex items-center justify-center px-[22px]">
          <a href="https://docs.0xqstar.com/" target="_blank">
            <img src="/imgs/icons/telegram.svg" className="w-[36px] h-[36px]" />
          </a>
        </div>
        <div className="border-solid border-white border-r-[1px] flex items-center justify-center px-[22px]">
          <a href="https://docs.0xqstar.com/" target="_blank">
            <img src="/imgs/icons/twitter.svg" className="w-[36px] h-[36px]" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-[16px] justify-between mt-[12px]">
      <span className="text-[12px] text-white font-[500] tracking-[1.44px]">2023</span>
      <span className="text-[12px] text-white font-[500] uppercase tracking-[1.44px]">Intelligence</span>
    </div>
    <div className="flex mt-[20px] gap-[16px] justify-between items-start">
      <div className="flex flex-col">
        <p className="mt-[52px] font-[500] text-white text-[80px] max-w-[650px] uppercase leading-[80px]">
          The Next-gen of Future Generative AI
        </p>
        <div className="flex items-center mt-[24px] gap-[20px]">
          <div className="w-[450px] bg-[#FFFFFF66] h-[1px] relative">
            <div className="w-[160px] bg-white h-full"></div>
          </div>
          <span className="text-[12px] font-[500] text-white uppercase leading-[12px] tracking-[1.44px]">VIEW WHITEPAPER</span>
          <a href="https://docs.0xqstar.com/" target="_blank" className="rounded-full flex items-center justify-center bg-white border-[1px] border-solid border-white group hover:bg-transparent p-[24px] transition-all duration-300">
            <RightUpArrow className="!text-[#2837A0] w-[40px] h-[40px] group-hover:!text-white" />
          </a>
        </div>
        <div className="flex gap-[8px] flex-wrap items-center max-w-[650px] mt-[40px]">
          {
            listCategory?.map((item) => <CategoryBox title={item} />)
          }
        </div>
      </div>
      <img src="/imgs/nums.svg" className="w-[90px]" />
    </div>

  </Container>;
}

export default HomeContainer;
