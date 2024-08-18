import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';

const WebsitePull = ({ filePath }) => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
      const fetchHtmlContent = async () => {
        try {
          const response = await axios.get('King_Min_of_Qi.html');
          let html = response.data;

                // Remove patterns like [x]</a> where x is a number
                html = html.replace(/<a[^>]*>\[\d+\]<\/a>/g, '');
                html = html.replace(/<a[^>]*>Edit<\/a>/g, '');
          const cleanHtml = DOMPurify.sanitize(response.data, {
            ALLOWED_TAGS: ['a'],
            ALLOWED_ATTR: ['href']
        });
          setHtmlContent(html);
        } catch (error) {
          console.error('Error fetching HTML content:', error);
        }
      };
  
      fetchHtmlContent();
    }, []);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default WebsitePull;
