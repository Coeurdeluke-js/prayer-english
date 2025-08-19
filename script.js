// Prayer Builder Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    const prayerSteps = document.querySelectorAll('.prayer-step');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const prayerInputs = document.querySelectorAll('.prayer-input');
    const prayerPreview = document.getElementById('prayer-preview-text');
    const speakBtn = document.querySelector('.speak-btn');
    const ctaButton = document.querySelector('.cta-button');
    
    let currentStep = 1;
    const totalSteps = prayerSteps.length;
    
    // Initialize prayer preview
    updatePrayerPreview();
    
    // Initialize the first step display
    updateStepDisplay();
    
    // Set dynamic year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Navigation functionality
    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStepDisplay();
        } else if (currentStep === totalSteps) {
            finishPrayer();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStepDisplay();
        }
    });
    
    // Update step display
    function updateStepDisplay() {
        prayerSteps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Update navigation buttons
        prevBtn.disabled = currentStep === 1;
        
        // Update button content and styling
        if (currentStep === totalSteps) {
            nextBtn.textContent = 'Finalizar';
            nextBtn.innerHTML = 'Finalizar <div class="custom-icon icon-check"></div>';
        } else {
            nextBtn.textContent = 'Siguiente';
            nextBtn.innerHTML = 'Siguiente <div class="custom-icon icon-chevron-right-white"></div>';
        }
        
        // Update previous button arrow color when active
        if (currentStep > 1) {
            prevBtn.innerHTML = '<div class="custom-icon icon-chevron-left-white"></div> Anterior';
        } else {
            prevBtn.innerHTML = '<div class="custom-icon icon-chevron-left"></div> Anterior';
        }
        
        // Update input field states
        updateInputFieldStates();
    }
    
    // Function to control which input fields can be edited
    function updateInputFieldStates() {
        prayerInputs.forEach((input, index) => {
            if (index + 1 === currentStep) {
                // Active step - enable input
                input.disabled = false;
                input.classList.add('active');
                input.style.opacity = '1';
                input.style.backgroundColor = 'var(--primary-blue)';
                input.style.borderColor = 'var(--primary-blue)';
                input.style.cursor = 'text';
                input.focus(); // Auto-focus the active input
            } else {
                // Inactive steps - disable input
                input.disabled = true;
                input.classList.remove('active');
                input.style.opacity = '0.8';
                input.style.backgroundColor = '#f5f5f5';
                input.style.borderColor = '#ddd';
                input.style.cursor = 'not-allowed';
            }
        });
    }
    
    // Update prayer preview in real-time
    prayerInputs.forEach(input => {
        input.addEventListener('input', updatePrayerPreview);
        input.addEventListener('change', updatePrayerPreview);
    });
    
    function updatePrayerPreview() {
        const prayerParts = Array.from(prayerInputs).map(input => input.value.trim());
        const completePrayer = prayerParts.join(' ');
        prayerPreview.textContent = completePrayer;
    }
    
    // Speech synthesis functionality
    speakBtn.addEventListener('click', () => {
        const prayerText = prayerPreview.textContent;
        
        if (speakBtn.textContent.includes('Detener')) {
            // Stop speaking
            speechSynthesis.cancel();
            speakBtn.innerHTML = '<div class="custom-icon icon-volume"></div> Escuchar Oración';
            speakBtn.style.backgroundColor = '#01aac7';
        } else {
            // Start speaking
            speakPrayer(prayerText);
        }
    });
    
    function speakPrayer(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            utterance.pitch = 1;
            
            // Change button state while speaking
            speakBtn.innerHTML = '<div class="custom-icon icon-volume"></div> Detener';
            speakBtn.style.backgroundColor = '#dc3545';
            
            utterance.onend = () => {
                speakBtn.innerHTML = '<div class="custom-icon icon-volume"></div> Escuchar Oración';
                speakBtn.style.backgroundColor = '#01aac7';
            };
            
            utterance.onerror = () => {
                speakBtn.innerHTML = '<div class="custom-icon icon-volume"></div> Escuchar Oración';
                speakBtn.style.backgroundColor = '#01aac7';
            };
            
            speechSynthesis.speak(utterance);
        } else {
            alert('La síntesis de voz no es compatible con tu navegador.');
        }
    }
    
    // Finish prayer functionality
    function finishPrayer() {
        const prayerText = prayerPreview.textContent;
        
        // Create a modal or notification
        const modal = document.createElement('div');
        modal.className = 'prayer-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>¡Tu Oración Está Completa!</h3>
                <p>${prayerText}</p>
                <div class="modal-actions">
                    <button class="modal-btn speak-modal-btn">
                        <div class="custom-icon icon-volume"></div> Escuchar
                    </button>
                    <button class="modal-btn close-modal-btn">Cerrar</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add modal styles
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .prayer-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
            }
            .modal-content {
                background: white;
                padding: 30px;
                border-radius: 12px;
                max-width: 500px;
                width: 90%;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            .modal-content h3 {
                color: #007da5;
                margin-bottom: 20px;
                font-size: 24px;
            }
            .modal-content p {
                color: #333;
                line-height: 1.6;
                margin-bottom: 25px;
                font-size: 16px;
            }
            .modal-actions {
                display: flex;
                gap: 15px;
                justify-content: center;
            }
            .modal-btn {
                padding: 12px 24px;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: background-color 0.3s ease;
            }
            .speak-modal-btn {
                background-color: #01aac7;
                color: white;
            }
            .speak-modal-btn:hover {
                background-color: #0091b5;
            }
            .close-modal-btn {
                background-color: #6c757d;
                color: white;
            }
            .close-modal-btn:hover {
                background-color: #5a6268;
            }
        `;
        document.head.appendChild(modalStyles);
        
        // Modal event listeners
        modal.querySelector('.speak-modal-btn').addEventListener('click', () => {
            speakPrayer(prayerText);
        });
        
        modal.querySelector('.close-modal-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
            document.head.removeChild(modalStyles);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
                document.head.removeChild(modalStyles);
            }
        });
    }
    
    // CTA button functionality
    ctaButton.addEventListener('click', () => {
        document.getElementById('guide').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to prayer cards
    document.querySelectorAll('.prayer-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Keyboard navigation for prayer builder
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentStep < totalSteps) {
            currentStep++;
            updateStepDisplay();
        } else if (e.key === 'ArrowLeft' && currentStep > 1) {
            currentStep--;
            updateStepDisplay();
        }
    });
    
    // Auto-save prayer progress
    function savePrayerProgress() {
        const prayerData = Array.from(prayerInputs).map(input => input.value);
        localStorage.setItem('prayerProgress', JSON.stringify(prayerData));
    }
    
    function loadPrayerProgress() {
        const savedData = localStorage.getItem('prayerProgress');
        if (savedData) {
            const prayerData = JSON.parse(savedData);
            prayerInputs.forEach((input, index) => {
                if (prayerData[index]) {
                    input.value = prayerData[index];
                }
            });
            updatePrayerPreview();
        }
    }
    
    // Save progress when inputs change
    prayerInputs.forEach(input => {
        input.addEventListener('input', savePrayerProgress);
    });
    
    // Load saved progress on page load
    loadPrayerProgress();
    
    // Chatbot functionality
    const floatingChat = document.getElementById('floating-chat');
    const chatbotInterface = document.getElementById('chatbot-interface');
    const chatbotClose = document.getElementById('chatbot-close');
    
    // Toggle chatbot
    floatingChat.addEventListener('click', function() {
        chatbotInterface.classList.toggle('active');
    });
    
    // Close chatbot
    chatbotClose.addEventListener('click', function() {
        chatbotInterface.classList.remove('active');
    });
    
    // Close chatbot when clicking outside
    document.addEventListener('click', function(event) {
        if (!chatbotInterface.contains(event.target) && !floatingChat.contains(event.target)) {
            chatbotInterface.classList.remove('active');
        }
    });
    
    // Handle question clicks
    const questions = document.querySelectorAll('.chatbot-question');
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const questionText = this.textContent;
            handleQuestion(questionText);
        });
    });
    
    // Handle primary button click
    const primaryBtn = document.querySelector('.chatbot-primary-btn');
    primaryBtn.addEventListener('click', function() {
        handleSendMessage();
    });
    
    // Handle search input
    const searchInput = document.querySelector('.chatbot-search-input');
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch(this.value);
        }
    });
});

// Handle question responses
function handleQuestion(question) {
    const responses = {
        '¿Cómo funciona la estructura de oración?': 'La estructura de oración en inglés sigue un patrón de 4 pasos: 1) Apertura (Heavenly Father), 2) Agradecimiento (I thank thee for...), 3) Peticiones (I ask thee...), 4) Cierre (In the name of Jesus Christ, Amen).',
        '¿Puedo practicar la pronunciación?': '¡Sí! Usa la función de "Práctica y Pronunciación" donde puedes escuchar la pronunciación correcta y practicar con ejercicios interactivos.',
        '¿Hay recursos para principiantes?': 'Absolutamente. Tenemos recursos adaptados para todos los niveles, desde frases básicas hasta oraciones más complejas.',
        '¿Cómo mejoro mi inglés espiritual?': 'Practica regularmente, usa la función de pronunciación, y construye tu vocabulario espiritual paso a paso con nuestra guía estructurada.'
    };
    
    const response = responses[question] || 'Gracias por tu pregunta. Nuestro equipo te responderá pronto.';
    showResponse(response);
}

// Handle send message
function handleSendMessage() {
    showResponse('Gracias por tu mensaje. Te responderemos en las próximas 24 horas.');
}

// Handle search
function handleSearch(query) {
    if (query.trim()) {
        showResponse(`Buscando información sobre: "${query}". Nuestro equipo te ayudará pronto.`);
    }
}

// Show response (you can expand this to show actual chat messages)
function showResponse(message) {
    // For now, just show an alert. You can expand this to show actual chat messages
    alert(message);
}
