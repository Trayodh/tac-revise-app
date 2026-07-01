import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add extra_bank_data.js script
if "extra_bank_data.js" not in content:
    content = content.replace('<script src="data.js?v=15"></script>', '<script src="data.js?v=15"></script>\n  <script src="extra_bank_data.js"></script>')
    content = content.replace('<script src="data.js"></script>', '<script src="data.js"></script>\n  <script src="extra_bank_data.js"></script>')
    print("Injected script tag.")

# 2. Inject nav link under Dashboard
if "data-screen=\"question-bank\"" not in content:
    nav_item = """        <a class="nav-item" data-screen="question-bank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
          Question Bank
        </a>
"""
    content = content.replace('Dashboard\n        </a>', 'Dashboard\n        </a>\n\n' + nav_item)
    print("Injected nav link.")

# 3. Inject screen section before <script> tags or before end of main
if 'id="screen-question-bank"' not in content:
    section_code = """
      <!-- SCREEN: EXTRA QUESTION BANK -->
      <section id="screen-question-bank" class="screen">
        <h1>Extra Question Bank</h1>
        <p class="subtitle">Browse thousands of unused PYQs segregated by subject.</p>
        
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
"""
    content = content.replace('</main>', section_code + '\n    </main>')
    print("Injected section code.")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

print("index.html patched completely.")
