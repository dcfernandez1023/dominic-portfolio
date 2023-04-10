import { Typography } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';
import CustomLink from "./CustomLink";

const { Title, Text } = Typography;

type ExperienceTabContentProps = {
    title: string;
    company: string;
    companyUrl: string;
    startDate: string;
    endDate: string;
    responsibilities: string[],
    workSamples: { link: string, display: string }[]
};

export default function ExperienceTabContent({ 
    title, 
    company,
    companyUrl,
    startDate, 
    endDate, 
    responsibilities,
    workSamples 
}: ExperienceTabContentProps) {
    const textStyle = { fontSize: "17px", opacity: "0.8" };

    return (
        <div>
            <Typography>
                <Title style={{ fontSize: "22px" }}>{title} <span style={{ color: "#64ffda" }}>@</span> <CustomLink link={companyUrl} display={company} withUnderline={true}/></Title>
                <Text style={textStyle}>{startDate} - {endDate}</Text>
            </Typography>
            <br />
            <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>
                {responsibilities.map((resp, index) => {
                    return (
                        <li key={`responsibility-${index}`}>
                            <CaretRightOutlined style={{ color: "#64ffda" }} /> {resp}
                            <br />
                            <br />
                        </li>
                    );
                })}
            </ul>
            {workSamples.length > 0 ?
                <div style={{ fontSize: "17px" }}>
                    <strong>Work Samples</strong>:
                    <br />
                    {workSamples.map((sample, index) => {
                        return (
                            <div key={`sample-${index}`} style={{ marginLeft: "15px" }}>
                                <CustomLink
                                    link={sample.link}
                                    display={` ${sample.display}`}
                                />
                            </div>
                        );
                    })}
                </div>
                :
                <div />
            }
        </div>
    );
}