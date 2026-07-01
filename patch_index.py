import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add script tag
if "extra_bank_data.js" not in content:
    content = content.replace('<script src="data.js?v=15"></script>', '<script src="data.js?v=15"></script>\n  <script src="extra_bank_data.js"></script>')
    content = content.replace('<script src="data.js"></script>', '<script src="data.js"></script>\n  <script src="extra_bank_data.js"></script>')

# 2. Add navigation link
nav_target = """                <li class="nav-item">
                    <a href="#" class="nav-link" onclick="showSection('dashboard')">
                        <span class="material-symbols-outlined">dashboard</span> Dashboard
                    </a>
                </li>"""

nav_insert = """                <li class="nav-item">
                    <a href="#" class="nav-link" onclick="showSection('dashboard')">
                        <span class="material-symbols-outlined">dashboard</span> Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" onclick="showQuestionBank()">
                        <span class="material-symbols-outlined">library_books</span> Question Bank
                    </a>
                </li>"""

if "showQuestionBank()" not in content:
    content = content.replace(nav_target, nav_insert)

# 3. Add the Question Bank Section
section_target = """            <!-- END MOCK EXAM VIEW -->"""

section_insert = """            <!-- END MOCK EXAM VIEW -->

            <!-- EXTRA QUESTION BANK VIEW -->
            <section id="question-bank-section" class="hidden">
                <div class="header-banner">
                    <h1>Extra Question Bank</h1>
                    <p>Browse thousands of unused PYQs segregated by subject.</p>
                </div>
                
                <div class="bank-filters">
                    <button class="bank-filter-btn active" onclick="renderQuestionBank('gs')">General Studies (<span id="count-gs">0</span>)</button>
                    <button class="bank-filter-btn" onclick="renderQuestionBank('english')">English (<span id="count-english">0</span>)</button>
                    <button class="bank-filter-btn" onclick="renderQuestionBank('maths')">Mathematics (<span id="count-maths">0</span>)</button>
                </div>

                <div id="bank-container" class="bank-container">
                    <!-- Cards injected via JS -->
                </div>
                
                <div class="load-more-container" style="text-align: center; padding: 20px;">
                    <button id="load-more-btn" class="start-btn" onclick="loadMoreBankQuestions()" style="display: none;">Load More Questions</button>
                </div>
            </section>
            <!-- END EXTRA QUESTION BANK VIEW -->"""

if "id=\"question-bank-section\"" not in content:
    content = content.replace(section_target, section_insert)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Patch applied to index.html successfully.")
