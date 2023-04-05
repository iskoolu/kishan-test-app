import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React from "react"

function Faq() {

      const [expanded, setExpanded] = React.useState(false);
      const handleAccordionChange = (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : '');

      };

      return (
            <div>
                  <h1 className="text-[45px] lg:text-9xl mb-[3rem] font-bold uppercase">
                        Frequently Asked
                  </h1>

                  <Accordion className="w-[100%] bg-lightblack mt-6 lg:px-7 lg:py-1  pr-3 pl-1 py-1 " sx={{ backgroundColor: 'black' }} expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')} TransitionProps={{ unmountOnExit: true }} >
                        <AccordionSummary expandIcon={
                              expanded === 'panel1' ? (
                                    <AddIcon sx={{ color: 'whitesmoke' }} className="flex items-end" />
                              ) : (
                                    <RemoveIcon sx={{ color: 'whitesmoke' }} className="flex items-end ml-[10px]" />
                              )
                        }
                              aria-controls="accordian-content"
                              id="panel1a-header">
                              <Typography className="font-bold  whitespace-nowrap text-textwhite text-[15px] " >What is Node Army?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography className="text-textwhite text-[19px]">
                                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion className="w-[100%] bg-lightblack mt-6 lg:px-7 lg:py-1  pr-3 pl-1 py-1 " sx={{ backgroundColor: 'black' }} expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')} TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary expandIcon={
                              expanded === 'panel2' ? (
                                    <AddIcon sx={{ color: 'whitesmoke' }} />
                              ) : (
                                    <RemoveIcon sx={{ color: 'whitesmoke' }} />
                              )
                        }
                              aria-controls="accordian-content"
                              id="panel1a-header">
                              <Typography className="font-bold whitespace-nowrap text-textwhite text-[15px]" >How can I benefit from using Node Army?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography className="text-textwhite text-[19px]">
                                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>

                  <Accordion className="w-[100%] bg-lightblack mt-6 lg:w-full lg:px-7 lg:py-1 sm:w-full md:w-full pr-3 pl-1 py-1 " sx={{ backgroundColor: 'black' }} expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')} TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary expandIcon={
                              expanded === 'panel3' ? (
                                    <AddIcon sx={{ color: 'whitesmoke' }} />
                              ) : (
                                    <RemoveIcon sx={{ color: 'whitesmoke' }} />
                              )
                        }
                              aria-controls="accordian-content"
                              id="panel1a-header">
                              <Typography className="font-bold  whitespace-nowrap text-textwhite text-[14.3px] " >Do I need technical expertise to use Node Army?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography className="text-textwhite text-[16px]">
                                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>

                  <Accordion className="w-[100%] bg-lightblack mt-6 lg:w-full lg:px-7 lg:py-1 sm:w-full md:w-full pr-3 pl-1 py-1 " sx={{ backgroundColor: 'black' }} expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')} TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary expandIcon={
                              expanded === 'panel4' ? (
                                    <AddIcon sx={{ color: 'whitesmoke' }} />
                              ) : (
                                    <RemoveIcon sx={{ color: 'whitesmoke' }} />
                              )
                        }
                              aria-controls="accordian-content"
                              id="panel1a-header">
                              <Typography className="font-bold  whitespace-nowrap text-textwhite text-[14.6px] " >What kind of support does Node Army provide?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography className="text-textwhite text-[19px]">
                                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>

                  <Accordion className="w-[100%] bg-lightblack mt-6 lg:w-full lg:px-7 lg:py-1 sm:w-full md:w-full pr-3 pl-1 py-1 " sx={{ backgroundColor: 'black' }} expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')} TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary expandIcon={
                              expanded === 'panel5' ? (
                                    <AddIcon sx={{ color: 'whitesmoke' }} />
                              ) : (
                                    <RemoveIcon sx={{ color: 'whitesmoke' }} />
                              )
                        }
                              aria-controls="accordian-content"
                              id="panel1a-header">
                              <Typography className="font-bold  whitespace-nowrap text-textwhite text-[15px] " >How do I get started with Node Army?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography className="text-textwhite text-[19px]">
                                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>

                  <Accordion className="w-[100%] bg-lightblack mt-6 lg:w-full lg:px-7 lg:py-1 sm:w-full md:w-full pr-3 pl-1 py-1 " sx={{ backgroundColor: 'black' }} expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')} TransitionProps={{ unmountOnExit: true }}>
                        <AccordionSummary expandIcon={
                              expanded === 'panel6' ? (
                                    <AddIcon sx={{ color: 'whitesmoke' }} />
                              ) : (
                                    <RemoveIcon sx={{ color: 'whitesmoke' }} />
                              )
                        }
                              aria-controls="accordian-content"
                              id="panel1a-header">
                              <Typography className="font-bold  whitespace-nowrap text-textwhite text-[15px] " >How will I be rewarded by using Node Army?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography className="text-textwhite text-[19px]">
                                    Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>

            </div>
      )
}

export default Faq
