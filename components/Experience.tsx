import { Typography, Divider, Tabs } from "antd";
import ExperienceTabContent from "./ExperienceTabContent";

const { Title, Text } = Typography;

export default function Experience() {
    const tabItems = [
        {
            label: "Rodeo",
            key: "rodeo-tab",
            children: (
                <ExperienceTabContent
                    title="Software Engineer Intern"
                    company="Rodeo"
                    companyUrl="https://www.rodeomoney.com/"
                    startDate="January 2023"
                    endDate="Present"
                    responsibilities={[
                        "Developed an internal Linkedin automation tool that sends OpenAI generated messages to promote Rodeo Money's affiliate marketing software on Linkedin",
                        "Developed front-end React components and REST APIs using TypeScript and Next.js, implemented user authentication and database persistence with Supabase, and utilized OpenAI to generate marketing messages"
                    ]}
                    workSamples={[{ link: "https://rodeo-usf.vercel.app/", display: "Linkedin Automation Tool" }]}
                />
            )
        },
        {
            label: "D&I Integrations",
            key: "integrations-tab",
            children: (
                <ExperienceTabContent
                    title="Integration Analyst/Developer (part-time)"
                    company="D&I Integrations, University of San Francisco"
                    companyUrl="https://myusf.usfca.edu/its"
                    startDate="June 2021"
                    endDate="Present"
                    responsibilities={[
                        "Develop production data integrations by creating ETL processes using Python and Informatica",
                        "Developed a daily-running process that feeds a Tableau dashboard with analytics and insights on all of the university's data integrations",
                        "Developed a real-time integration used by over 8,000 students to keep their phone numbers in sync between the university's Salesforce Student platform and the university's Oracle database self-service platform"
                    ]}
                    workSamples={[]}
                />
            )
        },
        {
            label: "DocuSign",
            key: "docu-tab",
            children: (
                <ExperienceTabContent
                    title="Full-Stack Software Engineer Intern"
                    company="DocuSign"
                    companyUrl="https://www.docusign.com/"
                    startDate="May 2022"
                    endDate="August 2022"
                    responsibilities={[
                        "Built and deployed 4 features to production that allow users to search, modify, and send DocuSign envelopes natively from DocuSign's Zoom integration",
                        "Developed React components, AWS lambda functions, and leveraged the Zoom SDK and Apps to migrate the DocuSign in-person signing experience natively within Zoom"
                    ]}
                    workSamples={[{ link: "https://marketplace.zoom.us/apps/qsDLHg0-Q6WXiF6H1TVWig", display: "DocuSign eSignature for Zoom" }]}
                />
            )
        },
        {
            label: "We Care Insurance",
            key: "wecare-tab",
            children: (
                <ExperienceTabContent
                    title="Software Engineer Intern"
                    company="We Care Insurance"
                    companyUrl="https://www.rodeomoney.com/"
                    startDate="April 2021"
                    endDate="May 2022"
                    responsibilities={[
                        "Built a web application with SpringBoot and MySQL that automates finding insurance quotes for the clients of We Care Insurance and allows small businesses to view and manage the insurance policies of their employees"
                    ]}
                    workSamples={[
                        { link: "https://insurance-bundle.com/", display: "Insurance Quote Finder" },
                        { link: "https://manage-insurance.com", display: "Manage Insurance Platform" }
                    ]}
                />
            )
        }
    ];

    return (
        <div id="experience">
            <Divider
                orientation="left" 
                orientationMargin="0"
            >
                <Typography>
                    <Title>Experience</Title>
                </Typography>
            </Divider>
            <Text style={{ fontSize: "17px", opacity: "0.75" }}>
                These are the companies that I have interned and done part-time work for 
                during my time in university. I have had the privilege of gaining exposure 
                to a wide variety of technologies and applying my skills to build software 
                for different sectors.
            </Text>
            <div style={{ height: "60px" }} />
            <Tabs
                tabPosition="left"
                items={tabItems}
                tabBarStyle={{ color: "#64ffda" }}
                animated
            >
                
            </Tabs>
        </div>
    );
}