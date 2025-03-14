"use client"

import MindfulnessZoneBanner from '../../../public/MindfulnessZoneBanner.png';
import AITicTacToe from '../../../public/AITicTacToe.png';
import AITextDetector from '../../../public/AITextDetector.png';
import Sponsorfy from '../../../public/Sponsorfy.png';
import AIScheduleAssistant from '../../../public/AIScheduleAssistant.png';
import ThreadsClone from '../../../public/ThreadsClone.png';
import RealEstateSite from '../../../public/RealEstateSite.png';
import NetworkingSite from '../../../public/NetworkingSite.png';
import InternshipApp from '../../../public/InternshipApp.png';
import WebEditor from '../../../public/WebEditor.png';
import CryptoSite from '../../../public/CryptoSite.png';
import CoffeeSite from '../../../public/CoffeeSite.png';
import CallAnalyzer from '../../../public/CallAnalyzer.png';
import AITravelApp from '../../../public/AITravelApp.png';
import VoiceCloneAI from '../../../public/VoiceCloneAI.png';
import RAGimg from '../../../public/RAGimg.png';
import Image from 'next/image';

export default function Portfolio(){
    const projects = [
        {
            title: "AI call analyzer",
            description: "A specialized AI-powered SaaS designed to enhance the performance of Sales Development Representatives (SDRs) by analyzing their calls and identifying areas for improvement. The platform also includes robust management features for team leads to oversee and optimize SDR performance. The solution is hosted securely in the cloud via Google Cloud Run (GCR).",
            image: CallAnalyzer
        },
        {
            title: "AI voice cloning tool",
            description: "A machine learning tool that utilizes online training data to create models capable of replicating any input voice. This technology enables precise and versatile voice cloning for a variety of applications.",
            image: VoiceCloneAI
        },
        {
            title: "AI social media assistant",
            description: "An advanced SaaS solution that employs web scraping to aggregate content from your social media accounts. The platform downloads videos, analyzes them frame by frame, examines engagement metrics and transcripts, and leverages Retrieval-Augmented Generation (RAG) with a Large Language Model (LLM) to facilitate interactive insights and suggestions based on your content.",
            image: RAGimg
        },
        {
            title: "AI travel app",
            description: "An innovative travel application that integrates multiple tools to streamline the vacation booking process, reducing it to under 10 minutes. Leveraging web scraping, along with APIs for flights, hotels, and Google Console, this app provides a seamless and efficient booking experience.",
            image: AITravelApp
        },
        { 
            title: "Mindfulness Zone", 
            description: "An interactive web application designed to promote mindfulness and mental well-being through guided meditation, relaxation techniques, and stress management resources.", 
            image: MindfulnessZoneBanner 
        },
        { 
            title: "AI Task Manager App", 
            description: "A smart task management application leveraging artificial intelligence to help users organize and prioritize their tasks efficiently, featuring reminders and progress tracking.", 
            image: AIScheduleAssistant 
        },
        { 
            title: "AI TicTacToe", 
            description: "A classic TicTacToe game enhanced with artificial intelligence, allowing players to challenge an AI opponent with various difficulty levels.", 
            image: AITicTacToe 
        },
        { 
            title: "Threads clone", 
            description: "A social media platform inspired by Threads, allowing users to share updates, connect with friends, and engage in community discussions.", 
            image: ThreadsClone 
        },
        { 
            title: "Networking Site", 
            description: "A professional networking website enabling users to create profiles, connect with industry peers, and explore career opportunities.", 
            image: NetworkingSite 
        },
        { 
            title: "Real Estate Website", 
            description: "A comprehensive real estate platform that allows users to search for properties, view detailed listings, and connect with real estate agents.", 
            image: RealEstateSite 
        },
        { 
            title: "Sponsorfy", 
            description: "A sponsorship management application designed to help event organizers and sponsors collaborate, track sponsorship deals, and maximize event success.", 
            image: Sponsorfy 
        },
        { 
            title: "Internship App", 
            description: "A platform dedicated to helping students and recent graduates find internships, apply for positions, and manage their internship experiences.", 
            image: InternshipApp 
        },
        { 
            title: "Online Code Editor Website", 
            description: "An online code editor providing a collaborative environment for developers to write, edit, and share code in real-time, with support for multiple programming languages.", 
            image: WebEditor 
        },
        { 
            title: "AI Text Detector", 
            description: "An AI-powered application capable of detecting and analyzing text in images and documents, with features for text extraction and sentiment analysis.", 
            image: AITextDetector 
        },
    ];    
    return (
        <section style={projectGalleryStyle}>
            <h2 style={sectionTitleStyle}>Project Gallery</h2>
            <div style={projectGalleryContainerStyle}>
                {projects.map((project, index) => (
                    <div key={index} style={projectGalleryItemStyle}>
                        <div style={projectGalleryImageContainerStyle}>
                            <Image src={project.image} alt={project.title} style={projectGalleryImageStyle} layout="responsive" width={300} height={200} />
                        </div>
                        <h3 style={projectTitleStyle}>{project.title}</h3>
                        <p style={projectDescriptionStyle}>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2rem',
};

const projectGalleryImageContainerStyle = {
    width: '100%',
    height: 'auto',
};

const projectGalleryStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#0C0C0C',
    color: '#FCFCFC'
};

const projectGalleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
};

const projectGalleryItemStyle = {
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    padding: '1rem',
    borderRadius: '10px',
    backgroundColor: '#202020',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer'
};

const projectGalleryImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px'
};

const projectTitleStyle = {
    fontSize: '1.5rem',
    margin: '1rem 0',
};

const projectDescriptionStyle = {
    fontSize: '1rem',
    color: '#B0B0B0',
};