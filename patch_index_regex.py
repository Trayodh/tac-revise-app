import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add extra_bank_data.js script
if "extra_bank_data.js" not in content:
    content = re.sub(r'(<script src="data\.js[^>]*></script>)', r'\1\n    <script src="extra_bank_data.js"></script>', content)
    print("Injected script tag.")

# 2. Add navigation link robustly
if "showQuestionBank()" not in content:
    dashboard_nav = r'(<a href="#" class="nav-link" onclick="showSection\(\'dashboard\'\)">\s*<span class="material-symbols-outlined">dashboard</span> Dashboard\s*</a>\s*</li>)'
    nav_injection = r"""\1
                <li class="nav-item">
                    <a href="#" class="nav-link" onclick="showQuestionBank()">
                        <span class="material-symbols-outlined">library_books</span> Question Bank
                    </a>
                </li>"""
    content = re.sub(dashboard_nav, nav_injection, content)
    print("Injected navigation link.")

# 3. Add section robustly
if 'id="question-bank-section"' not in content:
    mock_end = r'(<!-- END MOCK EXAM VIEW -->)'
    section_injection = r"""\1

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
    content = re.sub(mock_end, section_injection, content)
    print("Injected UI section.")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Finished patching index.html")
